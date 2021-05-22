const fs = require("fs");

const employees = [{ name: "Employee 1 Name", salary: 2000 }];
var file = `${__dirname}/employees.json`;

const createEmployeesFile = () => {
  return new Promise((resolve, reject) => {
    let data = JSON.stringify(employees);

    fs.writeFile(file, data, "utf8", (err) => {
      err
        ? reject("Bir hata oluştu.")
        : resolve("Dosya yazma işlemi başarılı.");
    });
  });
};
const getEmployees = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf8", (err, data) => {
      err ? reject(err) : resolve(data);
    });
  });
};
const addEmployee = (employee) => {
  return new Promise((resolve, reject) => {
    getEmployees()
      .then((result) => {
        result = JSON.parse(result);
        result.push(employee);
        result = JSON.stringify(result);
        writeFile(result)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const writeFile = (data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, "utf8", (err) => {
      err ? reject(err) : resolve("Yazma işlemi başarılı.");
    });
  });
};
const deleteFile = () => {
  return new Promise((resolve, reject) => {
    fs.unlink(file, (err) => {
      err ? reject("Dosya silinemedi.") : resolve("Dosya başarıyla silindi.");
    });
  });
};

(async () => {
  try {
    await createEmployeesFile();
    await addEmployee({ name: "Oğuzhan Yılmaz", salary: 5000 });
    await deleteFile();
  } catch (error) {
    console.log(error);
  }
})();
