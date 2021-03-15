import {useSelector} from "react-redux";
import './Measurements.css';



function Measurements(){
    const measurements = useSelector(state => state.measurements.byId);
    const user = useSelector(state => state.session.user);

    if(!user){
        return null;
    }

    const userId = user.id;




    if(!measurements){
        return null;
    }

    const myMeasurements = measurements.filter((measurement) => measurement.userId === userId);




        return(
            <div>
                <h1 className="measurements-header">Measurements</h1>
                {myMeasurements && myMeasurements.map((measurements, index) => (
                    <div key={index} className="measure-div">
                        <div className="measure measurements-chest">{` chest: ${measurements.chest}`}</div>
                        <div className="measure measurements-shoulder">{` shoulders: ${measurements.shoulders}`}</div>
                        <div className="measure measurements-sleeves">{` sleeves: ${measurements.sleeves}`}</div>
                        <div className="measure measurements-biceps">{` biceps: ${measurements.biceps}`}</div>
                        <div className="measure measurements-wrist">{` wrist: ${measurements.wrist}`}</div>
                        <div className="measure measurements-waist">{` waist: ${measurements.waist}`}</div>
                        <div className="measure measurements-jacket">{` jacket length: ${measurements.jacketLength}`}</div>
                        <div className="measure measurements-height">{` height: ${measurements.height}`}</div>
                        <div className="measure measurements-hip">{` hip: ${measurements.hip}`}</div>
                        <div className="measure measurements-thigh-circumference">{` thigh circumference: ${measurements.thighCircumference}`}</div>
                        <div className="measure measurements-knee-circumference">{` knee circumference: ${measurements.kneeCircumference}`}</div>
                        <div className="measure measurements-ankle-circumference">{` ankle circumference: ${measurements.ankleCircumference}`}</div>
                        <div className="measure measurements-waist-to-ankle">{` waist to ankle: ${measurements.waistToAnkle}`}</div>
                        <div className="measure measurements-ankleToKnee">{` ankle to knee: ${measurements.ankleToKnee}`}</div>
                        <div className="measure measurements-knee-To-Thigh">{` knee to thigh: ${measurements.kneeToThigh}`}</div>
                        <div className="measure measurements-backrise">{` backrise: ${measurements.backRise}`}</div>
                        <div className="measure measurements-frontrise">{` frontrise: ${measurements.frontRise}`}</div>
                    </div>
                ))}
            </div>
        )





}

export default Measurements;
