import React from 'react';

const Success = ({details}) => {
    return (
        <div className="flex flex-col items-center justify-center my-28">
      <div className="border px-12 mx-2 rounded-md text-[#6A6D7C] min-w-96 max-w-4xl">
        <div className="text-[#6A6D7C] text-center my-12">
          <Typography.Title
            style={{ color: "#6A6D7C" }}
            className="font-bold text-4xl"
          >
            <span className="text-[#6A6D7C]">Successfully</span>
          </Typography.Title>
          <p className="text-[#6A6D7C]">
         {details}
          </p>
        </div>

         
            <Button
              className="bg-[#7CC84E] text-white"
              size="large"
              htmlType="submit"
              style={{ width: "100%" }}
            >
             Continue
            </Button>
           
   
      </div>
    </div>
    );
};

export default Success;