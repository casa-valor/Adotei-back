import { InstitutionService } from './institution.service';
import { PetService } from './pet.service';
import { UserService } from './user.service';
import { TransactionService } from './transaction.service';

const institutionService = new InstitutionService();
const petService = new PetService();
const userService = new UserService();
const transactionService = new TransactionService();

export {
  institutionService,
  InstitutionService,
  userService,
  UserService,
  petService,
  PetService,
  transactionService,
  TransactionService,
};
