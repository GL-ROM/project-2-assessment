const React = require('react');



class Index extends React.Component {
    render(){
        const {toDos} = this.props;
        console.log(toDos);
        console.log(toDos.length)
        const toDoList = () => {
            if (toDos.length === 0) {
                return (
                    <h3>There are no To Dos yet!</h3>
                )
            } else if (toDos.length > 0){
                toDos.map((toDo, index) => {
                    return (
                            <li>
                                {toDo}
                                <form action={`/todo/${toDo._id}?_method=DELETE`} method="POST">
                                    <input type="submit" value="Delete"/>
                                </form>
                            </li>
                    )
                })
            }
        }

        return (
            <>
                <div>
                    <h1>To Do List</h1>
                    <ul>
                        {
                        toDos.map((toDo, index) => {
                            return (
                                <li>
                                    {toDo.todo + ' - Not Done'}
                                    <form action={`/todo/${toDo._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value="Delete"/>
                                    </form>
                                </li>
                            )
                        })
                    }
                    </ul>
                </div>
                <hr/>
                
                <form action="/todo" method="POST">
                    <input type="text" name="todo" id="todo"/>
                    <input type="submit" value="Add To Do Item"/>
                </form>
            </>
        )
    }
};

module.exports = Index;