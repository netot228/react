import React from 'react';

class Clock extends React.Component {

    constructor(props) {

        super(props); // всегда забрать пропсы сверху, если класс расширяет родительский

        this.state = {
            time: new Date().toLocaleTimeString()
        };

    }

    render(){
        return (
            <h1>...and now is {this.state.time}</h1>
        );
    }

    componentDidMount(){ // дефолтный метод, вызывается автоматически, когда компонент смонтирован
        this.timerID = setInterval(
                            ()=>{
                                this.setState({time: new Date().toLocaleTimeString()});
                                this.render();
                            },
                            1000
                        );
    }

    componentWillUnmount(){ // дефолтный метод, вызывается, когда компонент удаляется из дома, используй для очистики памяти
        clearInterval(this.timerID);
    }
}

export default Clock;