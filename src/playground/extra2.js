const Layout = (props) => {
    return (
        <div>
            <p>header</p>
            {props.children}
            <p>footer</p>
        </div>
    )
}


//Passing in JSX to render - STEP 1
const template = (
    <div>
        <h1>Page Title</h1>
        <p>This is my page</p>
    </div>
)

ReactDOM.render(<Layout><p>THIS IS INLINE</p></Layout>, document.getElementById('app'))



//Passing in JSX to render - STEP 2
ReactDOM.render((
    <Layout>
        <div>
            <h1>Page Title</h1>
            <p>This is my page</p>
        </div>
    </Layout>
), document.getElementById('app'))
