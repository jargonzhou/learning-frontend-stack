import { describe, expect, test } from "@jest/globals";
import { APIPayload, Payload, serializable } from "./decorators";

describe("declrators", () => {
  test('@serializable', () => {
    let map = new Map
    map.set('id', '1234')
    map.set('version', '1.0.0')

    let DecoratedAPIPayload = serializable(APIPayload)
    let payload = new DecoratedAPIPayload(new Payload(map))
    let serialized = payload.serialize()
    expect(serialized).toBe('{"id":"1234","version":"1.0.0"}')
  })
})