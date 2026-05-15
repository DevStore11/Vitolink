import { DataSource } from 'typeorm';
import { Role, TipoRole } from './role/entities/role.entity';

export async function seedRoles(dataSource:DataSource){
    const roleRepo=dataSource.getRepository(Role);

    const rolesExistentes=await roleRepo.count();
    if(rolesExistentes>0){
        return;
    }
    await roleRepo.save([
        {id:1,nome:TipoRole.ADMIN},
        {id:2,nome:TipoRole.FUNCIONARIO},
        {id:3,nome:TipoRole.TECNICO}
        
    

      ]);
    console.log("Roles seedados com sucesso");

}