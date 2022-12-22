//定义默认数据
const defaultState = {
    //Myheader组件的key
    key: 1
};

interface IAction {
    type: string;
    value?: any;
}

// eslint-disable-next-line
export default (state = defaultState, action: IAction) => {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case "changeKey":
            newState.key++;
            break;
        default:
            break;
    }
    return newState;
};