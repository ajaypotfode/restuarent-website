"use client"
import AllMenu from './AllMenu'
import AddMenu from './AddMenu'
import UseFoodData from '../../hooks/useFoodItem'
import { FormSpinner, PageSpinner } from '../../components/Loaders'
const Admin = () => {
  const {
    foodItem,
    newFoodData,
    filterdData,
    handleFoodItemData,
    uploadFoodImage,
    submitFoodData,
    getFoodItems,
    removeFoodItem,
    filterCategory,
    resetCurrentFoodItem,
    imageInputRef,
    loading,
    removeFormErrors,
  formError } = UseFoodData()

  return (
    <div className="dashboard">
      {loading["order/fetchOrderItems"] ? (<PageSpinner />)
        : (
          <AllMenu
            foodItem={foodItem}
            getFoodItems={getFoodItems}
            removeFoodItem={removeFoodItem}
            resetCurrentFoodItem={resetCurrentFoodItem}
          />
        )}

      {loading["food/submitFood"] ? (<FormSpinner />)
        : (<AddMenu
          newFoodData={newFoodData}
          handleFoodItemData={handleFoodItemData}
          uploadFoodImage={uploadFoodImage}
          submitFoodData={submitFoodData}
          imageInputRef={imageInputRef}
          loading={loading}
          formError={formError}
          removeFormErrors={removeFormErrors}
        />)}
    </div>
  )
}

export default Admin