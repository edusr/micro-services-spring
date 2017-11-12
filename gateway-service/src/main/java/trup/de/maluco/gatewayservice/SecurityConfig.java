package trup.de.maluco.gatewayservice;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;

@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter  {

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http
        .logout().logoutSuccessUrl("/").and()
        .authorizeRequests().antMatchers(HttpMethod.OPTIONS).permitAll().antMatchers("/index.html", "/app.html", "/abobora/**","/")
        .permitAll().anyRequest().authenticated().and()
        .csrf()
          .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse());
		
//		http.logout().and().antMatcher("/**").authorizeRequests().antMatchers("/login","/auth/**").permitAll()
//        .anyRequest().authenticated().and().csrf().disable();
  }
	

}
