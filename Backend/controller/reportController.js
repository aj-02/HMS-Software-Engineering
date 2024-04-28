import {catchAsyncErrors} from "../middlewares/catchAsyncErrors.js"
import ErrorHandler from "../middlewares/errorMiddleware.js"
import {Appointment} from "../models/appointmentSchema.js"
import {User} from "../models/userSchema.js"
import {Report} from "../models/reportSchema.js"
import { v4 as uuidv4 } from 'uuid'; // Import the uuid library

export const postReport = catchAsyncErrors(async (req, res, next) => {
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
  
    const _id = "1234";

    const patientId = req.user._id;
    const report = await Report.create({
        _id:"1234",
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
      report,
      message: "Report Send!",
    });
  });