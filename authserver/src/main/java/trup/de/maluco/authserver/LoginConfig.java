package trup.de.maluco.authserver;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@Order(-20)
public class LoginConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http
        .formLogin().permitAll()
        .and().httpBasic().and()
        .requestMatchers()
        //specify urls handled
        .antMatchers("/login", "/oauth/authorize", "/oauth/confirm_access")
        .antMatchers("/fonts/**", "/js/**", "/css/**")
        .and()
        .authorizeRequests()
        .antMatchers("/fonts/**", "/js/**", "/css/**").permitAll()
        .anyRequest().authenticated();
		
	}

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.parentAuthenticationManager(authenticationManager);

	}
}