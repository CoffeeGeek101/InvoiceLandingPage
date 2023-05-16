import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface PlanState {
    id : string | null;
    permonth : string;
}

const initialState : PlanState = {
    id : null,
    permonth : "0",
}

const PlanSlice = createSlice({
    name : "plan",
    initialState,
    reducers : {
        selectPlan : (state, action : PayloadAction<{id : string | null, permonth : string}>) => {
            return {
                ...state,
                id : action.payload.id,
                permonth : action.payload.permonth,
            }
        },
        deselectPlan : (state) => {
            return {
                ...state,
                id : null,
                permonth : "0",
            }
        }
    }
});

export const { selectPlan, deselectPlan } = PlanSlice.actions;
export default PlanSlice.reducer;