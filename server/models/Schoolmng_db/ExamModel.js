import ExamModelGenerated from "./generated/ExamModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await ExamModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...ExamModelGenerated,
  ...customModel
};
