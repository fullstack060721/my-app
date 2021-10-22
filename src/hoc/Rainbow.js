
const Rainbow = (WrappedComponent) => {
    return (props) => (
        <div style={{background: 'yellow'}}>
            <p>High order component</p>
            <WrappedComponent {...props} rainbow_color='yellow' />
        </div>)
}

export default Rainbow