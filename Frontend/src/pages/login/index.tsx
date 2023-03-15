import cn from "classnames";
import { Label, TextInput, Button } from "flowbite-react/";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../services/auth/authSlice";
import { useEffect } from "react";
import { toast } from "react-toastify";

const LoginPage = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, message } = useSelector(
    (state: any) => state.auth
  );

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    dispatch(login({ username, password }) as any);
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
  }, [isLoading, isError, message]);

  return (
    <div
      className={cn(
        "flex justify-center absolute w-full h-full overflow-scroll"
      )}
    >
      <div
        className={cn(
          "flex flex-col justify-center items-center",
          "w-11/1 lg:w-[1036px]",
          "m-10"
        )}
      >
        <h1 className='text-2xl font-bold'>Sign in to your account</h1>
        <form
          onSubmit={handleSubmit}
          className={cn("flex flex-col gap-4 m-10", "w-full max-w-[400px]")}
        >
          <div>
            <div className='mb-2 block'>
              <Label htmlFor='username' value='Username' />
            </div>
            <TextInput
              id='username'
              placeholder='Your username'
              required={true}
            />
          </div>
          <div>
            <div className='mb-2 block'>
              <Label htmlFor='password' value='Your password' />
            </div>
            <TextInput id='password' type='password' required={true} />
          </div>

          <Button type='submit'>Submit</Button>
        </form>
        <p>Don't have an account yet?</p>{" "}
        <Link className='text-blue-700' to={"/register"}>
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
