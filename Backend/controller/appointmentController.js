import {catchAsyncErrors} from "../middlewares/catchAsyncErrors.js"
import ErrorHandler from "../middlewares/errorMiddleware.js"
import {Appointment} from "../models/appointmentSchema.js"
import {User} from "../models/userSchema.js"

export const postAppointment = catchAsyncErrors(async (req, res, next) => {
    const {
      firstName,
      lastName,
      email,
      phone,
      nic,
      dob,
      gender,
      appointment_date,
      department,
      hasVisited,
      address,
    } = req.body;
  
    
    const patientId = req.user._id;
    const appointment = await Appointment.create({
      firstName,
      lastName,
      email,
      phone,
      nic,
      dob,
      gender,
      appointment_date,
      department,
      hasVisited,
      address
    });
    res.status(200).json({
      success: true,
      appointment,
      message: "Appointment Send!",
    });
  });

  export const getAllAppointments = catchAsyncErrors(async (req, res, next) => {
    const appointments = await Appointment.find();
    res.status(200).json({
      success: true,
      appointments,
    });
  });

  export const updateAppointmentStatus = catchAsyncErrors(async (req, res, next) => {
    const {id}= req.params;
    let appointment=await Appointment.findById(id);
    if(!appointment){
        return next(new ErrorHandler("Appointment Not Found!", 404));
    }
    appointment = await Appointment.findByIdAndUpdate(id,req.body,{
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });
    res.status(200).json({
        success: true,
        message: "Appointment Status Updated!",
        appointment,
    });
  })

  export const deleteAppointment = catchAsyncErrors(async (req, res, next) => {
    const { id } = req.params;
    const appointment = await Appointment.findById(id);
    if (!appointment) {
      return next(new ErrorHandler("Appointment Not Found!", 404));
    }
    await appointment.deleteOne();
    res.status(200).json({
      success: true,
      message: "Appointment Deleted!",
    });
  });