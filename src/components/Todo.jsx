import { todoFamily } from "../store/atoms";
import { useRecoilState } from "recoil";
function Todo({ id }) {
    const [todo, setTodo] = useRecoilState(todoFamily(id));
    console.log("todo -> ", todo);
    return (
        <>
            {todo.title}
            {todo.description}
            <br />
        </>
    )
}

export default Todo;