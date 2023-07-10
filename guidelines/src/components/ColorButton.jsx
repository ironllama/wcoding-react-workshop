import './ColorButton.css';

// export default function ColorButton({ color, children }) {
export default function ColorButton(props) {
    console.log("PROPS:", props);
    // const color = props.color;
    // const children = props.children;

    return (
        <div className='buttonWrapper' style={{
            backgroundColor: props.color,
            fontWeight: props.color !== 'transparent' ? 'bold' : 'normal',
            color: props.color !== 'transparent' ? 'black' : 'white',
            }}>
            {props.children}
        </div>
    );
}