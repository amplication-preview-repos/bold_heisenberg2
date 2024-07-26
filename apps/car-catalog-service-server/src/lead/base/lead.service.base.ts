/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Lead as PrismaLead } from "@prisma/client";
import { PublicLeadDto } from "../PublicLeadDto";

export class LeadServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.LeadCountArgs, "select">): Promise<number> {
    return this.prisma.lead.count(args);
  }

  async leads(args: Prisma.LeadFindManyArgs): Promise<PrismaLead[]> {
    return this.prisma.lead.findMany(args);
  }
  async lead(args: Prisma.LeadFindUniqueArgs): Promise<PrismaLead | null> {
    return this.prisma.lead.findUnique(args);
  }
  async createLead(args: Prisma.LeadCreateArgs): Promise<PrismaLead> {
    return this.prisma.lead.create(args);
  }
  async updateLead(args: Prisma.LeadUpdateArgs): Promise<PrismaLead> {
    return this.prisma.lead.update(args);
  }
  async deleteLead(args: Prisma.LeadDeleteArgs): Promise<PrismaLead> {
    return this.prisma.lead.delete(args);
  }
  async AllowLeadCreation(args: PublicLeadDto): Promise<string> {
    throw new Error("Not implemented");
  }
}
