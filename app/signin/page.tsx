import { Button, Container, Grid, TextField, Typography } from "@mui/material";

export default function Signin() {
  return (
    <div className="w-full max-w-[2200px] bg-[#323232] my-0 mx-auto">
      <div className="flex flex-row items-start pt-12 bg-[url(https://assets.challonge.com/assets/redesign/section-background.png)] bg-no-repeat">
        <div className="py-0 px-10 flex-grow min-h-[calc(100vh-48px)] max-w-[100vw]">
          <div className="content-wrapper max-w-screen-sm mx-auto">
            <div className="header max-w-[600px] px-6 mx-auto mb-8">
              <h1 className="text-2xl lg:text-3xl text-center italic font-bold text-white mt-5 mb-2.5">
                Sign up for Challonge
              </h1>
              <p className="text-[#737373] mb-2.5">
                Get started easily by signing up to manage your tournaments and
                event
              </p>
            </div>
            <div className="body">
              <Container maxWidth="sm">
                <form>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        label="Username"
                        fullWidth
                        name="username"
                        className="bg-[#2a2a2a]"
                        InputLabelProps={{
                          className: "text-[#737373]",
                          sx: {
                            color: "#737373",
                            "&.Mui-focused": {
                              color: "#737373",
                            },
                          },
                        }}
                        inputProps={{ className: "text-white" }}
                        // value={formData.username}
                        // onChange={handleChange}
                        // error={!!errors.username}
                        // helperText={errors.username}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Email"
                        fullWidth
                        name="email"
                        className="bg-[#2a2a2a]"
                        InputLabelProps={{
                          className: "text-[#737373]",
                          sx: {
                            color: "#737373",
                            "&.Mui-focused": {
                              color: "#737373",
                            },
                          },
                        }}
                        inputProps={{ className: "text-white" }}
                        // value={formData.email}
                        // onChange={handleChange}
                        // error={!!errors.email}
                        // helperText={errors.email}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Phone Number"
                        fullWidth
                        name="phoneNumber"
                        className="bg-[#2a2a2a] "
                        InputLabelProps={{
                          className: "text-[#737373]",
                          sx: {
                            color: "#737373",
                            "&.Mui-focused": {
                              color: "#737373",
                            },
                          },
                        }}
                        inputProps={{ className: "text-white" }}
                        // value={formData.phoneNumber}
                        // onChange={handleChange}
                        // error={!!errors.phoneNumber}
                        // helperText={errors.phoneNumber}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Password"
                        fullWidth
                        type="password"
                        name="password"
                        className="bg-[#2a2a2a]"
                        InputLabelProps={{
                          className: "text-[#737373]",
                          sx: {
                            color: "#737373",
                            "&.Mui-focused": {
                              color: "#737373",
                            },
                          },
                        }}
                        inputProps={{ className: "text-white" }}
                        // value={formData.password}
                        // onChange={handleChange}
                        // error={!!errors.password}
                        // helperText={errors.password}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Re-type Password"
                        fullWidth
                        type="password"
                        name="retypePassword"
                        className="bg-[#2a2a2a]"
                        InputLabelProps={{
                          className: "text-[#737373]",
                          sx: {
                            color: "#737373",
                            "&.Mui-focused": {
                              color: "#737373",
                            },
                          },
                        }}
                        inputProps={{ className: "text-white" }}
                        // value={formData.retypePassword}
                        // onChange={handleChange}
                        // error={!!errors.retypePassword}
                        // helperText={errors.retypePassword}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        className="bg-[#f8844a] italic font-bold text-base"
                      >
                        Sign Up
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
