import { Field, Int, ObjectType } from '@nestjs/graphql';

import { PageInfo } from './page-info.type';

// export function PaginatedResponse<TItem>(TItemClass: ClassType<TItem>): any {
export function PaginatedResponse<TItem>(TItemClass: any): any {
  @ObjectType({ isAbstract: true })
  abstract class PaginatedResponseClass {
    @Field((type) => [TItemClass])
    nodes: TItem[];

    @Field((type) => Int)
    totalCount: number;

    @Field((type) => PageInfo)
    pageInfo?: PageInfo;
  }

  return PaginatedResponseClass;
}
