import { mount, shallowMount, Wrapper } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
// import NotificationCount from "@/components/NotificationCount.vue";
import TodoApp from "@/components/TodoApp.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});

// describe("NotificationCount.vue", () => {
//   it("props", () => {
//     let clicked = false

//     const wrapper = mount(NotificationCount, {})
//     wrapper.setData({
//       messageCount: 5
//     })

//     // events
//     wrapper.find('a').trigger('click')
//     expect(clicked).toBe(true)

//     const count = wrapper.find(".count").text()
//     expect(count).toBe("2")
//   })
// })

// Vue Test Utils - A Crash Course
// https://test-utils.vuejs.org/guide/essentials/a-crash-course.html
describe("TodoApp", () => {
  let wrapper: Wrapper<TodoApp>;
  const selector = '[data-test="todo"]';
  const newSelector = '[data-test="new-todo"]';
  const formSelector = '[data-test="form"]';
  const checkboxSelector = '[data-test="todo-checkbox"]';

  beforeAll(() => {
    wrapper = mount(TodoApp);
  });

  it("works", () => {
    const todo = wrapper.get(selector); // get
    expect(todo.text()).toBe("Learn Vue.js 2");
  });

  it("create a todo", async () => {
    expect(wrapper.findAll(selector)).toHaveLength(1); // findAll

    await wrapper.get(newSelector).setValue("New todo"); // setValue
    await wrapper.get(formSelector).trigger("submit"); // trigger

    expect(wrapper.findAll(selector)).toHaveLength(2);
  });

  it("complete a toto", async () => {
    await wrapper.get(checkboxSelector).setChecked(); // setChecked

    expect(wrapper.get(selector).classes()).toContain("completed");
  });
});
