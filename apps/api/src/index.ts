import {  defineAbilityFor } from "@my-saas/auth"

const ability = defineAbilityFor({ role: 'ADMIN'})

const userCallInviteSomeoneElse = ability.can('invite', 'User')


console.log(userCallInviteSomeoneElse)