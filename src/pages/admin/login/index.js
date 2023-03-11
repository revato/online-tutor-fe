import React from "react";
import { Space, Typography, Button, Checkbox, Form, Input } from "antd";
import axios from "axios";

function Login() {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  const handleSubmit = () => {
    console.log("abc");
  };
  const onFinish = (values) => {
    axios
      .get("users")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    axios
      .post("login", {
        username: values.username,
        password: values.password,
      })
      .then(function (response) {
        console.log(response);
        axios
          .get("users", {
            headers: { Authorization: `Bearer ${response.data.accessToken}` },
          })
          .then((res) => {
            console.log(res);
            axios.post("logout").then((res) => {
              axios
                .get("users", {
                  headers: {
                    Authorization: `Bearer ${response.data.accessToken}`,
                  },
                })
                .then((res) => console.log(res));
            });
          })
          .catch((err) => console.log(err));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Space className="loginForm">
        <Typography.Title>Admin Login</Typography.Title>
        <div>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              // value={username}
              // onChange={setUsername(username)}
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              // value={password}
              // onChange={setPassword(password)}
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{ offset: 8, span: 16 }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit" onSubmit={handleSubmit}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Space>
    </div>
  );
}

export default Login;
