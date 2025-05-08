import Styles from '../css/Aprenda.module.css'

function Aprenda(){
    return(
        <div style={{ width: '100%', height: '600px', marginBottom: '100px' }}>
      <iframe
        src="https://eyes.nasa.gov/apps/solar-system/#/home"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
        title="NASA Solar System"
        allowFullScreen
      />
    </div>
    )
} export default Aprenda