1. estados
2. ciclo de vida
3. hooks

1: props, setState y state son palabras reservadas en componente de clases.

(en componente funcional lo llamamos react.useState) hooks se puede importar con estructuring
(React.useEffect) estos son llamados hooks

ejemplo con un componente de clase:

export default class home extends Component{
    constructor(props){
        super(props);
        this.state={
            count: 1,
            data:[1,2,3,4]
        };
    }

    render(){
        const{message} = this.props; esto es para destructuring.
    }
}

2: LifeCycle: tiene metodos como; 
    componentDidMount(){} lo ejecuta react cuando el componente se monta
    componentDidUpdate(){}  se actualiza 
    componentWillUnmount(){} se desmonta
    estos van dentro de las clases

en el render podemos hacer el destructuring.
const{message} = this.props;