import axios from "axios";
axios.defaults.withCredentials = true;

export const createApplication = async (values) => {
  const { reason, portfolio, clubId } = values;
  try {
    const res = await axios({
      method: "POST",
      url: `http://localhost:8006/api/v1/clubs/${clubId}/applications/create`,
      data: {
        reason,
        portfolio,
      },
    });
    return res;
  } catch (err) {
    return err.response;
  }
};

export const acceptApplication = async (values) => {
  const clubId = values.club;
  const applicationId = values._id;
  try {
    // console.log(clubId, applicationId);
    const res = await axios({
      method: "POST",
      url: `http://localhost:8006/api/v1/clubs/${clubId}/applications/${applicationId}`,
    });
    return res;
  } catch (err) {
    return err.response;
  }
};

export const rejectApplication = async (values) => {
  const clubId = values.club;
  const applicationId = values._id;
  try {
    const res = await axios({
      method: "DELETE",
      url: `http://localhost:8006/api/v1/clubs/${clubId}/applications/${applicationId}`,
    });
    return res;
  } catch (err) {
    return err.response;
  }
};
