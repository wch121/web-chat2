import ReactDOM from 'react-dom'
import MyRouter from 'router'
import "./base.less"
import { Provider } from 'react-redux'
import store from 'store'

ReactDOM.render(
    <Provider store={store}>
        <MyRouter />
    </Provider>
    ,
    document.getElementById("root")
)