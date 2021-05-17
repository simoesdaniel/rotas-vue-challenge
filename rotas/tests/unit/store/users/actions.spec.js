import actions from "@/store/user/actions.js";

let url = "";

jest.mock("axios", () => ({
  get: (_url) => {
    return new Promise((resolve) => {
      url = _url;
      resolve({
        data: {
          users: [],
        },
      });
    });
  },
}));

describe("loadUsers", () => {
  it("fetchs all users from the server", async () => {
    const commit = jest.fn();

    await actions.loadUsers({ commit });

    expect(url).toBe("http://clava.io/api/users");
    expect(commit).toHaveBeenCalledWith("load", []);
  });
});
