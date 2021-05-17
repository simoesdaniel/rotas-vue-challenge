import getters from "@/store/rotas/getters.js";

// destructure assign `mutations`
const { getShift } = getters;

describe("Testing rotas getters", () => {
  it("GetAllSelectedShifts", () => {
    // mock state
    const state = {
      shifts: {
        morning: [
          {
            userId: 1,
            type: "morning",
            date: "2020-11-01",
            username: "John Smith",
            rotaId: 11,
            period: { startDate: "2020-11-01", endDate: "2020-11-10" },
          },
        ],
        afternoon: [
          {
            userId: 1,
            type: "morning",
            date: "2020-11-01",
            username: "John Smith",
            rotaId: 11,
            period: { startDate: "2020-11-01", endDate: "2020-11-10" },
          },
        ],
      },
      selectedShift: "morning",
      selectedUsers: [],
    };
    const result = getShift(state);
    expect(result).toEqual([
      {
        userId: 1,
        type: "morning",
        date: "2020-11-01",
        username: "John Smith",
        rotaId: 11,
        period: { startDate: "2020-11-01", endDate: "2020-11-10" },
      },
    ]);
  });
});
