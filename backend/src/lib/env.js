import "dotenv/config";

export const ENV = {
  PORT: process.env.PORT || 3000,
  MONGO_URI: process.env.MONGO_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  EMAIL_FROM: process.env.EMAIL_FROM,
  EMAIL_FROM_NAME: process.env.EMAIL_FROM_NAME,
  CLIENT_URL: process.env.CLIENT_URL || "http://localhost:5173",
};

// PORT=3000
// MONGO_URI=mongodb+srv://adarshpandey23:pass123abc@cluster0.kntwabz.mongodb.net/PalTalk_db?appName=Cluster0

// NODE_ENV=development

// JWT_SECRET=myjwtsecretkey

// RESEND_API_KEY=re_b8MSsGUW_FDPoBTBzSq9EmbjgrY8Bw4UE

// EMAIL_FROM="onboarding@resend.dev"
// EMAIL_FROM_NAME="PalTalk Support"

// CLIENT_URL=http://localhost:5173
