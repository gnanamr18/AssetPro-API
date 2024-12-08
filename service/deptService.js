import Bus from '../models/busModel.js';

const addDept = async (dept,symbol) =>{
    const newDept = await Dept.create({
        dept,symbol
    });
    return newDept
}
export { addDept }