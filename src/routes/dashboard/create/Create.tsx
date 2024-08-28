import { Steps } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import BasicInfo from './basic-info/BasicInfo';
import VisualInfo from './visual-info/VisualInfo';
import TechnicalInfo from './technical-info/TechnicalInfo';
import CheckIn from './check-in/CheckIn';

const Create = () => {
  const [current, setCurrent] = useState<number>(0);
  const navigate = useNavigate(); 
  
  const handleNext = () => {
    if (current < 3) {
      setCurrent(prev => prev + 1);
    } else {
      console.log("Navigating to auth")
      navigate('/auth/signin'); 
    }
  };

  const handleBack = () => {
    if (current > 0) {
      setCurrent(prev => prev - 1);
    }
  };

  const components = [
    {
      id: 0,
      content: (current: number, handleNext: () => void, handleBack: () => void) => (
        <BasicInfo current={current} handleNext={handleNext} handleBack={handleBack} />
      ),
    },
    {
      id: 1,
      content: (current: number, handleNext: () => void, handleBack: () => void) => (
        <VisualInfo current={current} handleNext={handleNext} handleBack={handleBack} />
      ),
    },
    {
      id: 2,
      content: (current: number, handleNext: () => void, handleBack: () => void) => (
        <TechnicalInfo current={current} handleNext={handleNext} handleBack={handleBack} />
      ),
    },
    {
      id: 3,
      content: (current: number, handleNext: () => void, handleBack: () => void) => (
        <CheckIn current={current} handleNext={handleNext} handleBack={handleBack} />
      ),
    },
  ];

  return (
    <div>
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6">
        <Steps
          size="small"
          current={current}
          items={[
            { title: 'Basic Info' },
            { title: 'Visual Info' },
            { title: 'Technical Info' },
            { title: 'Check In' },
          ]}
          className="mb-8"
        />
        <div className='flex flex-col h-[500px] py-10'>
          {
            current < components.length &&
            components[current].content(current, handleNext, handleBack)
          }
        </div>
      </div>
    </div>
  );
};

export default Create;
