import DynamicFormContainer from './containers/DynamicFormContainer'
import './App.css'

function App() {
  return (
    <div
      style={{
        marginTop: '6rem',
        width: '75%',
        display: 'block',
        boxSizing: 'border-box',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: '24px',
        paddingRight: '24px',
      }}
    >
      <DynamicFormContainer />
    </div>
  )
}

export default App
