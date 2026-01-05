import Vue from 'vue';
import { Dispatch, Commit } from './index';

// compute function
type Computed = () => any;
// inline compute function
type InlineComputed<T extends Function> = T extends (...args: any[]) => infer R ? () => R : never
// mutation method: sync
type MutationMethod = (...args: any[]) => void;
// action method: async
type ActionMethod = (...args: any[]) => Promise<any>;
// inline method
type InlineMethod<T extends (fn: any, ...args: any[]) => any> = T extends (fn: any, ...args: infer Args) => infer R ? (...args: Args) => R : never
// Vue with extensions
type CustomVue = Vue & Record<string, any>;

// the map abstraction
interface Mapper<R> {
  // array syntax
  <Key extends string>(map: Key[]): { [K in Key]: R };
  // object syntax
  <Map extends Record<string, string>>(map: Map): { [K in keyof Map]: R };
}

interface MapperWithNamespace<R> {
  <Key extends string>(namespace: string, map: Key[]): { [K in Key]: R };
  <Map extends Record<string, string>>(namespace: string, map: Map): { [K in keyof Map]: R };
}

// mapper for state: getters
interface MapperForState {
  <S, Map extends Record<string, (this: CustomVue, state: S, getters: any) => any> = {}>(
    map: Map
  ): { [K in keyof Map]: InlineComputed<Map[K]> };
}

interface MapperForStateWithNamespace {
  <S, Map extends Record<string, (this: CustomVue, state: S, getters: any) => any> = {}>(
    namespace: string,
    map: Map
  ): { [K in keyof Map]: InlineComputed<Map[K]> };
}

// mapper for action: dispatch async
interface MapperForAction {
  <Map extends Record<string, (this: CustomVue, dispatch: Dispatch, ...args: any[]) => any>>(
    map: Map
  ): { [K in keyof Map]: InlineMethod<Map[K]> };
}

interface MapperForActionWithNamespace {
  <Map extends Record<string, (this: CustomVue, dispatch: Dispatch, ...args: any[]) => any>>(
    namespace: string,
    map: Map
  ): { [K in keyof Map]: InlineMethod<Map[K]> };
}

// mapper for mutaion: commit sync
interface MapperForMutation {
  <Map extends Record<string, (this: CustomVue, commit: Commit, ...args: any[]) => any>>(
    map: Map
  ): { [K in keyof Map]: InlineMethod<Map[K]> };
}

interface MapperForMutationWithNamespace {
  <Map extends Record<string, (this: CustomVue, commit: Commit, ...args: any[]) => any>>(
    namespace: string,
    map: Map
  ): { [K in keyof Map]: InlineMethod<Map[K]> };
}


interface NamespacedMappers {
  mapState: Mapper<Computed> & MapperForState;
  mapMutations: Mapper<MutationMethod> & MapperForMutation;
  mapGetters: Mapper<Computed>;
  mapActions: Mapper<ActionMethod> & MapperForAction;
}

// state as computed properties
export declare const mapState: Mapper<Computed>
  & MapperWithNamespace<Computed>
  & MapperForState
  & MapperForStateWithNamespace;

// methods to mutations
export declare const mapMutations: Mapper<MutationMethod>
  & MapperWithNamespace<MutationMethod>
  & MapperForMutation
  & MapperForMutationWithNamespace;

// getter as computed properties
export declare const mapGetters: Mapper<Computed>
  & MapperWithNamespace<Computed>;

// methods to actions
export declare const mapActions: Mapper<ActionMethod>
  & MapperWithNamespace<ActionMethod>
  & MapperForAction
  & MapperForActionWithNamespace;

export declare function createNamespacedHelpers(namespace: string): NamespacedMappers;
