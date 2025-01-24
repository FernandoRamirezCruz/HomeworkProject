# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
Subject.create([
  { name: 'Español', color: '#FF5733', teacher: 'Juan Pérez', schedule: {
      "Lunes" => ["07:00-08:00", "08:00-09:00"],
      "Martes" => ["09:00-10:00"]
    }
  },
  { name: 'Matemáticas', color: '#33FF57', teacher: 'María López', schedule: {
      "Miércoles" => ["10:00-11:00", "11:00-12:00"],
      "Jueves" => ["13:00-14:00"]
    }
  },
  { name: 'Física', color: '#3357FF', teacher: 'Carlos García', schedule: {
      "Viernes" => ["08:00-09:00", "09:00-10:00"],
      "Lunes" => ["10:00-11:00"]
    }
  },
  { name: 'Programación', color: '#FF33A1', teacher: 'Ana Martínez', schedule: {
      "Martes" => ["11:00-12:00", "12:00-13:00"],
      "Miércoles" => ["14:00-15:00"]
    }
  },
  { name: 'Redes', color: '#A133FF', teacher: 'Luis Fernández', schedule: {
      "Jueves" => ["09:00-10:00", "10:00-11:00"],
      "Viernes" => ["11:00-12:00"]
    }
  }
])