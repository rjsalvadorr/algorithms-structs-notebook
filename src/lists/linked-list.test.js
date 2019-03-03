import LinkedList from "./linked-list";

let linkedList;
const val1 = 44;
const val2 = 88;
const val3 = 33;

beforeEach(() => {
  linkedList = new LinkedList();
});

afterEach(() => {
  linkedList = undefined;
});

describe("Linked List", () => {
  it("should prepend", () => {
    linkedList.prepend(val1);
    linkedList.prepend(val2);
    linkedList.prepend(val3);

    expect(linkedList.find({ value: val1 })).toBeTruthy();
    expect(linkedList.find({ value: val2 })).toBeTruthy();
    expect(linkedList.find({ value: val3 })).toBeTruthy();
    expect(linkedList.find({ value: 123 })).toBeNull();
  });

  it("should append", () => {
    linkedList.append(val1);
    linkedList.append(val2);
    linkedList.append(val3);

    expect(linkedList.find({ value: val1 })).toBeTruthy();
    expect(linkedList.find({ value: val2 })).toBeTruthy();
    expect(linkedList.find({ value: val3 })).toBeTruthy();
    expect(linkedList.find({ value: 123 })).toBeNull();
  });

  it("should delete", () => {
    linkedList.append(val1);
    linkedList.append(val2);
    linkedList.append(val3);

    linkedList.delete(val2);

    expect(linkedList.find({ value: val1 })).toBeTruthy();
    expect(linkedList.find({ value: val3 })).toBeTruthy();
    expect(linkedList.find({ value: val2 })).toBeNull();

    linkedList.append(val2);
    linkedList.delete(val1);

    expect(linkedList.find({ value: val1 })).toBeNull();
    expect(linkedList.find({ value: val3 })).toBeTruthy();
    expect(linkedList.find({ value: val2 })).toBeTruthy();
  });
});
