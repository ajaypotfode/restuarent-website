// SpinnerComponents.tsx
import '../assets/css/spinner.css';

export const PageSpinner = () => {
  return (
    <div className="page-spinner-wrapper">
      <div className="spinner"></div>
    </div>
  );
};

export const FormSpinner = () => {
  return (
    <div className="form-spinner-container">
      <div className="form-spinner-wrapper">
        <div className="spinner"></div>
      </div>
    </div>
  );
};


export const SmallSpinner = () => {
  return (
    <div className="small-spinner-container">
      <div className="small-spinner"></div>
    </div>
  );
};