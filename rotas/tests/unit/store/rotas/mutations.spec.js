import mutations from "@/store/rotas/mutations.js";

// destructure assign `mutations`
const { setLoaded, addRota } = mutations;

describe("Check rotas mutations", () => {
  it("isLoaded", () => {
    // mock state
    const state = { loaded: false };
    // apply mutation
    setLoaded(state);
    // assert result
    expect(state.loaded).toBe(true);
  });
  it("addRota", () => {
    // mock state
    const state = { shifts: { morning: [], afternoon: [] } };
    const morning = [
      {
        userId: 1,
        type: "morning",
        date: "2020-11-01",
        username: "John Smith",
        rotaId: 11,
        period: { startDate: "2020-11-01", endDate: "2020-11-10" },
      },
    ];

    const afternoon = [
      {
        userId: 1,
        type: "afternoon",
        date: "2020-11-01",
        username: "John Smith",
        rotaId: 11,
        period: { startDate: "2020-11-01", endDate: "2020-11-10" },
      },
    ];
    // apply mutation
    addRota(state, { morning, afternoon });
    // assert result
    expect(state.shifts.morning.length).toBeGreaterThanOrEqual(1);
    expect(state.shifts.afternoon.length).toBeGreaterThanOrEqual(1);
  });
});
