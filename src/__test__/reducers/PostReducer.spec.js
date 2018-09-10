
import uut from '../../reducers/PostReducer'

const initialState = {
    id: 0,
    title: '',
    content: '',
};

describe('reducers', () => {
    it('should have initial state', () => {
        expect(uut()).toEqual(initialState);
    });
});
