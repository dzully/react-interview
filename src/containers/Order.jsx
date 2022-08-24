import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { services } from "../redux/selector";
import Layout from "../components/Layout";
import ActiveOrder from "../components/ActiveOrder";
import withService from "../hoc/withService";

const Order = () => {
  const navigate = useNavigate();
  const servicesData = useSelector(services);
  console.log({ servicesData });

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Layout>
      <div style={{ position: "absolute", top: 10, left: 10 }}>
        <Button
          variant="outlined"
          onClick={handleBack}
          startIcon={<ArrowBackIcon />}
        >
          Back To Service
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <ActiveOrder />
      </div>
    </Layout>
  );
};

export default withService(Order);