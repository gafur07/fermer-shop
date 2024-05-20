import { Link } from "react-router-dom";
import { Form, Input, Button } from "antd";

const Login = () => {

  return (
    <>
      <div className="auth-cont">
        <div className="bg"></div>

        <Form className="login-form p-8 m-auto">
          <h1 className="text-xxl-center text-slate-700 font-weight-light text-dark mb-4">Login</h1>
          <Form.Item
            rules={[{ required: true, message: "Please create username" }]}
          >
            <Input
              placeholder="Phone"
            />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: "Please create username" }]}
          >
            <Input.Password
              placeholder="Password"
            />
          </Form.Item>
          <span className="d-flex justify-content-between mb-4">
            <p>Do you don't have account!</p>
            <Link className="text-primary" to={"/register"}>Register</Link>
          </span>
          <Form.Item>
            <Button
              className="w-100"
              type="primary"
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default Login;
