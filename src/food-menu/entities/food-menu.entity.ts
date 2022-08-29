import {Entity, BaseEntity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class FoodMenu extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    price: number


}
