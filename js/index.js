"use strict";

// Створити абстрактний клас Figeure3D з властивостю ім'я (string не пуста) і методом обчислити об'єм.

// Створити класи нащадки: сфера, куб, *циліндр. Написати сеттери для властивостей.

// Створити функцію getVolume3DFigure, яка приймає будь яку 3d фігуру і повертає її об'єм.



class Figeure3D {
  constructor(name) {
    this.name = name;}
 set name(name){
      if (typeof name !== "string" || typeof name === null || typeof name === ' ' ) {
        throw new TypeError("name must be string");
      }

      this._name = name;
    }

    getVolumOfCube() {
      return this._length*this._width* this._height;
    }
    getVolumOfSphera() {
      return (4 / 3 * Math.PI * this._radius ** 3)
    }
  


  }
 

class Cube extends Figeure3D{
  constructor(length,width,height){
    super('cube');
    this.length = length;
    this.width = width;
    this.height = height;
  }
  set length(length){
      if (typeof length !== "number"   ) {
        throw new TypeError("diametr must be number");
      }
      if (typeof length <= 0 ) {
        throw new RangeError("numbers must positive");
      }
      this._length = length;
    }
  set width(width){
      if (typeof width !== "number"   ) {
        throw new TypeError("diametr must be number");
      }
      if (typeof width <= 0 ) {
        throw new RangeError("numbers must positive");
      }
      this._width = width;
    }
  set height(height){
      if (typeof height !== "number"   ) {
        throw new TypeError("diametr must be number");
      }
      if (typeof height <= 0 ) {
        throw new RangeError("numbers must positive");
      }
      this._height = height;
    }


}


class Sphere extends Figeure3D {
  constructor(radius){
    super('Sphere');
    this.radius = radius;
  }
  set radius(radius){
    if (typeof radius !== "number"   ) {
      throw new TypeError("diametr must be number");
    }
    if (typeof radius <= 0 ) {
      throw new RangeError("numbers must be positive");
    }
    this._radius = radius;
  }

}

function getVolume3DFigure (nameOfFiguere) {
  if(nameOfFiguere === 'Sphere' ){
  //  return super.getVolumOfSphera();
  }
  else if 
  (nameOfFiguere === 'cube' ){
  //  return super.getVolumOfCube();
  }
}



try {
  const figeure3D = new Figeure3D('Figure');
  const cube = new Cube (3,3,3)
  const sphere = new Sphere (4)
  console.log(figeure3D);
  console.log(cube);
  console.log(cube.getVolumOfCube())
  console.log(sphere.getVolumOfSphera())
  console.log(getVolume3DFigure('Sphere'))
} catch (error) {
  console.log(error);
}





  