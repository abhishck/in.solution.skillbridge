import Application from "../models/applicationModel.js";
import { sendMail } from "../utils/mailer.js";

// POST - submit application
export const createApplication = async (req, res) => {

  console.log("📦 Incoming Data:", req.body);
  try {
    // 1. Save to database
    const application = await Application.create(req.body);

    // 2. Send confirmation email to USER
    try {
      await sendMail({
        to: application.email,
        name: application.name,
        subject: "Application Submitted - SkillBridge Internship",
        html: `
          <div style="font-family:Arial;padding:10px">
            <h2>🎉 Application Submitted Successfully</h2>
            <p>Hi <b>${application.name}</b>,</p>
    
            <p>Thank you for applying for the SkillBridge Internship Program.</p>
    
            <p>We have received your application for:</p>
            <ul>
              <li><b>Domain:</b> ${application.domain}</li>
              <li><b>College:</b> ${application.college}</li>
            </ul>
    
            <p>Our team will review your profile and contact you soon.</p>
    
            <br/>
            <p>Regards,<br/><b>SkillBridge Solutions</b></p>
          </div>
        `,
      });
    } catch (mailError) {
      console.error("Mail failed:", mailError);
    }

    // 3. Send response to frontend
    res.status(201).json({
      success: true,
      message: "Application submitted successfully",
      data: application,
    });
  } catch (error) {
     res.status(500).json({
    success: false,
    message: error.message, // show real error
  });
  }
};
