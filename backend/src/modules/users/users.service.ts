import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';


@Injectable()
export class UsersService {
constructor(
@InjectRepository(User)
private usersRepo: Repository<User>,
) {}


findById(id: string) {
return this.usersRepo.findOne({ where: { id } });
}


findByPhone(phone: string) {
return this.usersRepo.findOne({ where: { phone } });
}


create(data: Partial<User>) {
const u = this.usersRepo.create(data);
return this.usersRepo.save(u);
}
}