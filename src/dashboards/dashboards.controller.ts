import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
@Controller('dashboards')
export class DashboardsController {
    // @UseGuards(AuthGuard('local'))
    @Get("/")
    async getPosts() {
        return "Posts"
    }
}
