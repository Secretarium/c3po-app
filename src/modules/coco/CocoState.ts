const initialState = {
};

export default function CocoReducer(state = initialState, action: { type: string }): { [key: string]: unknown } {
    switch (action.type) {
        default:
            return state;
    }
}
