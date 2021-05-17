import actions from "@/store/rotas/actions.js";

let url = "";

jest.mock("axios", () => ({
  get: (_url) => {
    return new Promise((resolve) => {
      url = _url;
      resolve({
        data: {
          rotas: [],
        },
      });
    });
  },
}));

describe("loadRotas", () => {
  it("fetchs all rotas from the server", async () => {
    const commit = jest.fn();
    const dispatch = jest.fn();

    await actions.loadRotas({ commit, dispatch });

    expect(url).toBe("http://clava.io/api/rotas");
    expect(commit).toHaveBeenCalledWith("load", {
      shifts: { morning: [], afternoon: [] },
      availableShifts: ["morning", "afternoon", "all"],
      availableRotas: [],
    });
    expect(dispatch).toHaveBeenCalledWith("loaded");
  });
  it("sets all shifts loaded", async () => {
    const commit = jest.fn();

    await actions.loaded({ commit });
    expect(commit).toHaveBeenCalledWith("setLoaded");
  });
});
