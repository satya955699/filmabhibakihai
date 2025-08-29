import TextField from "@mui/material/TextField";
import Portnav from "./portnav";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { form, tr } from "framer-motion/client";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";
import { hover } from "motion";
function Mylist() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isprogress, setprogress] = useState(false);
  const preset = "filmabhibakihai";
  const CLOUD_NAME = "dzlpih07n";
  const cloud = async (file) => {
    const formdata = new FormData();
    formdata.append("file", file);
    formdata.append("upload_preset", preset);

    try {
      console.log(formdata);

      const url = await axios.post(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        formdata
      );
      return url.data.secure_url;
    } catch (error) {
      console.log(" error while cloudinary", error);
    }
  };
  const onsubmit = async (data) => {
    if (data.moviimage) {
      setprogress(true);
      const imgurl = await cloud(data.moviimage[0]);
      data.imageurl = imgurl;
      const result = await axios.post("/api/main",data);
      console.log(result.data)

      setprogress(false);
    }
    alert("done");
  };
  return (
    <div className="mt-12 bg-gray-900 min-h-[100vh]">
      <Portnav />
      <div
        className={`${
          !isprogress ? "hidden" : ""
        } text-white absolute translate-y-[50vh] left-1/2 transform -translate-x-1/2 z-50`}
      >
        <CircularProgress className="text-orange-500" />
        <h4 className="mt-2 text-center">Please wait...</h4>
      </div>
      <form onSubmit={handleSubmit(onsubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 p-4 md:p-8 lg:p-[20vh] gap-4 md:gap-8 lg:gap-12 max-w-6xl mx-auto">
          <TextField
            error={!!errors.MovieName}
            helperText={errors.MovieName?.message}
            {...register("MovieName", {
              required: "length shol",
              maxLength: 100,
              pattern: { message: "textshould be thire" },
            })}
            InputLabelProps={{ style: { color: "white" } }}
            inputProps={{ style: { color: "white" } }}
            id="standard-basic"
            label="Movie Name"
            variant="standard"
            className="w-full"
            fullWidth
          />

          {[
            "Gener",
            "Duration",
            "MovieTitle",
            "Rating",
            "Releaseyear",
            "Dateofsubmit",
          ].map((e, i) => {
            return (
              <TextField
                key={i}
                type={["Duration", "Rating", "Releaseyear"].includes(e) ? "number" : "text"}
                {...register(e)}
                InputLabelProps={{ style: { color: "white" } }}
                inputProps={{ style: { color: "white" } }}
                id="standard-basic"
                label={e}
                variant="standard"
                className="w-full"
                fullWidth
              />
            );
          })}

          <div className="w-full">
            <Button
              variant="outlined"
              component="label"
              className="w-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors duration-200"
              sx={{
                borderColor: "orange",
                color: "orange",
                "&:hover": {
                  borderColor: "orange",
                  backgroundColor: "orange",
                  color: "white",
                },
              }}
            >
              <input
                accept="image/jpeg,image/png"
                {...register("moviimage", {
                  required: "movie poster is required",
                  validate: {
                    fileSize: (files) =>
                      !files[0] ||
                      files[0].size <= 10 * 1024 * 1024 ||
                      "Max file size is 10MB",
                  },
                })}
                type="file"
                className="hidden"
              />
              Choose Movie Poster
            </Button>
          </div>

          <TextField
            {...register("description")}
            className="col-span-1 md:col-span-2 w-full"
            id="outlined-multiline-flexible"
            label="Description"
            multiline
            maxRows={4}
            InputLabelProps={{ style: { color: "white" } }}
            inputProps={{ style: { color: "white" } }}
            fullWidth
          />
          <TextField
            {...register("review")}
            className="col-span-1 md:col-span-2 w-full"
            id="outlined-multiline-flexible"
            label="Review"
            multiline
            maxRows={4}
            InputLabelProps={{ style: { color: "white" } }}
            inputProps={{ style: { color: "white" } }}
            fullWidth
          />
          <div
            className={`${
              isprogress ? "hidden" : ""
            } col-span-1 md:col-span-2 flex justify-center`}
          >
            <Button
              sx={{
                backgroundColor: "orange",
                color: "white",
                padding: "12px 32px",
                fontSize: "16px",
                fontWeight: "600",
                "&:hover": {
                  backgroundColor: "#e67e22",
                },
              }}
              type="submit"
              className="w-full md:w-auto"
            >
              Submit
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Mylist;
