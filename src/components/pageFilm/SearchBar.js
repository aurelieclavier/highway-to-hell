class Welcome extends React.Component {
    constructor(props){
        super(props);
        this.state={
            
        }
    }
    render() {
      return <h1>Bonjour, {this.props.name}</h1>;
    }
  }