
function Parent (props){
    console.log(props.name);
    return (
    <>
    <h1>{props.name}</h1>
    <h2>{props.class}</h2>
    </>
    )
}
export default Parent;